import { PostService } from "../services/postService";
import { Post } from "../models/postModel";

// Mock model Mongoose
jest.mock("../models/postModel");

describe("PostService", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("deve retornar todos os posts", async () => {
    const mockPosts = [
      { title: "Post 1", content: "Content 1", author: "Author 1" },
    ];
    (Post.find as jest.Mock).mockResolvedValue(mockPosts);

    const result = await PostService.getAllPosts();
    expect(result).toEqual(mockPosts);
    expect(Post.find).toHaveBeenCalledTimes(1);
  });

  it("deve retornar um post pelo id", async () => {
    const mockPost = {
      title: "Post 1",
      content: "Content 1",
      author: "Author 1",
    };
    (Post.findById as jest.Mock).mockResolvedValue(mockPost);

    const result = await PostService.getPostById("1");
    expect(result).toEqual(mockPost);
    expect(Post.findById).toHaveBeenCalledWith("1");
  });

  it("deve criar um post", async () => {
    const mockPost = {
      title: "New Post",
      content: "New Content",
      author: "Author 1",
    };
    (Post.prototype.save as jest.Mock).mockResolvedValue(mockPost);

    const result = await PostService.createPost(mockPost);
    expect(result).toEqual(mockPost);
    expect(Post.prototype.save).toHaveBeenCalledTimes(1);
  });

  it("deve atualizar um post", async () => {
    const mockPost = {
      title: "Updated Post",
      content: "Updated Content",
      author: "Author 1",
    };
    (Post.findByIdAndUpdate as jest.Mock).mockResolvedValue(mockPost);

    const result = await PostService.updatePost("1", mockPost);
    expect(result).toEqual(mockPost);
    expect(Post.findByIdAndUpdate).toHaveBeenCalledWith("1", mockPost, {
      new: true,
    });
  });

  it("deve deletar um post", async () => {
    const mockPost = {
      title: "Post to delete",
      content: "Content",
      author: "Author 1",
    };
    (Post.findByIdAndDelete as jest.Mock).mockResolvedValue(mockPost);

    const result = await PostService.deletePost("1");
    expect(result).toEqual(mockPost);
    expect(Post.findByIdAndDelete).toHaveBeenCalledWith("1");
  });
});
