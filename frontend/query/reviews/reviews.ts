import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ICreateOrEditReview,
  IReviewListResponse,
  IReviewResponse,
} from "interface/Review.interface";
import { useRouter } from "next/router";
import axios from "query/axios";
import { IMutationConfig } from "query/query.interface";
import { queryKeys } from "query/queryKeys";

const getRacketReviewList = async (racketId: number, page: number) => {
  const { data } = await axios.get(`/reviews/${racketId}/all`, {
    params: {
      page,
    },
  });
  return data;
};

const getRacketReview = async (reviewId: number | undefined) => {
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
  racketId: number,
  reviewId: number,
  reviewForm: ICreateOrEditReview,
) => {
  const { data } = await axios.patch(
    `/reviews/${reviewId}`,
    {
      ...reviewForm,
    },
    {
      params: {
        racketId,
      },
    },
  );
  return data;
};

const deleteRacketReview = async (racketId: number, reviewId: number) => {
  const { data } = await axios.delete(`/reviews/${reviewId}`, {
    params: {
      racketId,
    },
  });
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

export const useRacketReview = (reviewId: number | undefined) =>
  useQuery<IReviewResponse>(
    queryKeys.reviews.single(reviewId),
    () => getRacketReview(reviewId),
    {
      enabled: reviewId !== undefined,
      suspense: true,
    },
  );

export const useCreateRacketReviewMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const racketId = Number(router.query.racketId);

  return useMutation(
    (reviewForm: ICreateOrEditReview) =>
      createRacketReview(racketId, reviewForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        alert("리뷰가 생성되었습니다");
      },
    },
  );
};

export const useEditRacketReviewMutation = (
  reviewId: number,
  mutationConfig: IMutationConfig,
) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const racketId = Number(router.query.racketId);

  return useMutation(
    (reviewForm: ICreateOrEditReview) =>
      editRacketReview(racketId, reviewId, reviewForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        mutationConfig.onSuccess();
        alert("리뷰가 수정되었습니다.");
      },
    },
  );
};

export const useDeleteRacketReviewMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const racketId = Number(router.query.racketId);

  return useMutation(
    (reviewId: number) => deleteRacketReview(racketId, reviewId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        alert("리뷰가 삭제되었습니다");
      },
    },
  );
};
