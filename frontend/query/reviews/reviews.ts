import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ICreateOrEditReview,
  IReviewListResponse,
  IReviewResponse,
} from "interface/Review.interface";
import { useRouter } from "next/router";
import axios from "query/axios";
import { queryKeys } from "query/queryKeys";

const getRacketReviewList = async (racketId: number, page: number) => {
  const { data } = await axios.get(`/reviews/${racketId}/all`, {
    params: {
      page,
    },
  });
  return data;
};

const getRacketReview = async (reviewId: number) => {
  const { data } = await axios.get(`/reviews/${reviewId}`);
  return data;
};

const createRacketReview = async (
  racketId: number,
  reviewForm: ICreateOrEditReview,
) => {
  const { data } = await axios.post(`/reviews/${racketId}`, {
    ...reviewForm,
  });
  return data;
};

const editRacketReview = async (
  reviewId: number,
  reviewForm: ICreateOrEditReview,
) => {
  const { data } = await axios.patch(`/reviews/${reviewId}`, {
    ...reviewForm,
  });
  return data;
};

const deleteRacketReview = async (reviewId: number) => {
  const { data } = await axios.delete(`/reviews/${reviewId}`);
  return data;
};

export const useReviewList = () => {
  const router = useRouter();
  const racketId = Number(router.query.racketId);
  const page = Number(router.query.page);
  const defaultPath = router.asPath.replace(/\?page=[0-9]/, "");

  return useQuery<IReviewListResponse, Error>(
    queryKeys.reviews.list(racketId, page),
    () => getRacketReviewList(racketId, page),
    {
      enabled: !isNaN(racketId),
      suspense: true,
      onSuccess: (data) => {
        if (page > 1 && data.reviewList.length === 0) {
          router.push(`${defaultPath}?page=1`);
        }
      },
    },
  );
};

export const useRacketReview = (reviewId: number) => {
  return useQuery<IReviewResponse>(
    queryKeys.reviews.single(reviewId),
    () => getRacketReview(reviewId),

    {
      enabled: !isNaN(reviewId),
      suspense: true,
    },
  );
};

export const useCreateRacketReviewMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const racketId = Number(router.query.racketId);

  return useMutation(
    (reviewForm: ICreateOrEditReview) =>
      createRacketReview(racketId, reviewForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.reviews.all);
        alert("리뷰가 생성되었습니다");
      },
    },
  );
};

export const useEditRacketReviewMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  return useMutation(
    (reviewForm: ICreateOrEditReview) => editRacketReview(reviewId, reviewForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.reviews.all);
        alert("리뷰가 수정되었습니다");
      },
    },
  );
};

export const useDeleteRacketReviewMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((reviewId: number) => deleteRacketReview(reviewId), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.reviews.all);
      alert("리뷰가 삭제되었습니다");
    },
  });
};
