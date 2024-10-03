import { Post } from "../models/postModel";

export class PostService {
  static async getAllPosts() {
    return Post.find({});
  }

  static async getPostById(id: string) {
    return Post.findById(id);
  }

  static async createPost(data: {
    title: string;
    content: string;
    author: string;
  }) {
    const newPost = new Post(data);
    return newPost.save();
  }
}
