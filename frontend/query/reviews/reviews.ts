import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICreateReview } from "interface/Review.interface";
import { useRouter } from "next/router";
import axios from "query/axios";
import { queryKeys } from "query/queryKeys";

const getRacketReviewList = async (racketId: number) => {
  const { data } = await axios.get(`/reviews/${racketId}`);
  return data;
};

const getRacketReview = async (reviewId: number) => {
  const { data } = await axios.get(`/reviews/${reviewId}`);
  return data;
};

const createRacketReview = async (
  racketId: number,
  reviewForm: ICreateReview,
) => {
  const { data } = await axios.post(`/reviews/${racketId}`, {
    ...reviewForm,
  });
  return data;
};

const editRacketReview = async (
  reviewId: number,
  reviewForm: Partial<ICreateReview>,
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
  return useQuery(
    queryKeys.reviews.list(racketId, page),
    () => getRacketReviewList(racketId),
    { enabled: !isNaN(racketId) },
  );
};

export const useRacketReview = () => {
  const router = useRouter();
  const racketId = Number(router.query.racketId);
  return useQuery(
    queryKeys.reviews.single(racketId),
    () => getRacketReview(racketId),

    { enabled: !isNaN(racketId) },
  );
};

export const useCreateRacketReviewMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const racketId = Number(router.query.racketId);

  return useMutation(
    (reviewForm: ICreateReview) => createRacketReview(racketId, reviewForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.reviews.all);
      },
    },
  );
};

export const useEditRacketReviewMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const reviewId = Number(router.query.reviewId);

  return useMutation(
    (reviewForm: Partial<ICreateReview>) =>
      editRacketReview(reviewId, reviewForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.reviews.single(reviewId));
      },
    },
  );
};

export const useDeleteRacketReviewMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const reviewId = Number(router.query.reviewId);

  return useMutation(() => deleteRacketReview(reviewId), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.reviews.all);
    },
  });
};
