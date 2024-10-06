import { Request, Response } from "express";
import { PostService } from "../services/postService";

export class PostController {
  static async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await PostService.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar posts" });
    }
  }

  static async getPostById(req: Request, res: Response) {
    try {
      const post = await PostService.getPostById(req.params.id);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar post" });
    }
  }

  static async createPost(req: Request, res: Response) {
    try {
      const { title, content, author } = req.body;
      const post = await PostService.createPost({ title, content, author });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar post" });
    }
  }

  static async updatePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, content, author } = req.body;

      const updatedPost = await PostService.updatePost(id, {
        title,
        content,
        author,
      });

      if (updatedPost) {
        res.status(200).json(updatedPost);
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar post" });
    }
  }

  static async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedPost = await PostService.deletePost(id);

      if (deletedPost) {
        res.status(200).json({ message: "Post deletado com sucesso" });
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar post" });
    }
  }
}
