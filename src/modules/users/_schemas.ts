import Joi from "joi";

interface UserPost {
  username: string;
  password: string;
  name: string;
}

const postUserSchema = Joi.object<UserPost>({
  username: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
});

interface UserPatch {
  username?: string;
  password?: string;
  name?: string;
}

const patchUserSchema = Joi.object<UserPatch>({
  username: Joi.string(),
  password: Joi.string(),
  name: Joi.string(),
});

interface UserLogin {
  username: string;
  password: string;
}
const loginUserSchema = Joi.object<UserLogin>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export { postUserSchema, patchUserSchema, loginUserSchema };
