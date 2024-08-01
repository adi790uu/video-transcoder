import { Request, Response } from "express";

export default {
  upload: async (req: Request, res: Response) => {
    try {
      console.log("hello");
    } catch (error) {
      console.log(error);
    }
  },
};
