import { Router } from "express";
import { Cat, CatType } from "./cats.model";

const router = Router();

// * READ 전체 고양이 데이터 조회
router.get("/cats", (req, res) => {
  try {
    // throw new Error("DB connection error");
    res.status(200).send({
      success: "true",
      cats: Cat,
    });
  } catch (error) {
    res.status(500).send({
      success: "false",
      error: error.message,
    });
  }
});

// * READ 특정 고양이 데이터 조회
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id == params.id;
    });
    res.status(200).send({
      success: "true",
      cats: cat,
    });
  } catch (error) {
    res.status(500).send({
      success: "false",
      error: error.message,
    });
  }
});

// * CREATE 고양이 데이터 저장
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    console.log(Cat);
    res.status(200).send({
      success: "true",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      success: "false",
      error: error.message,
    });
  }
});

export default router;
