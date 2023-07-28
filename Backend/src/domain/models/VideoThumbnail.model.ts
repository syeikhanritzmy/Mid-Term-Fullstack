export interface VideoThumbnailModel {
  _id: string;
  videoId: string;
  urlImageThumbnail: string;
  productLists: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
