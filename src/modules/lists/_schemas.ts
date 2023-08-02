import Joi from "joi";

interface ListPost {
  listname: string;
  password: string;
  name: string;
}

const postListSchema = Joi.object<ListPost>({
  listname: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
});

interface ListPatch {
  listname?: string;
  password?: string;
  name?: string;
}

const patchListSchema = Joi.object<ListPatch>({
  listname: Joi.string(),
  password: Joi.string(),
  name: Joi.string(),
});

interface ListLogin {
  listname: string;
  password: string;
}
const loginListSchema = Joi.object<ListLogin>({
  listname: Joi.string().required(),
  password: Joi.string().required(),
});

export { postListSchema, patchListSchema, loginListSchema };
