export const LOGICAL_ERRORS = {
    SOMETHING_WRONG: {
      msg: 'Something is wrong',
      statusCode: 500,
    },
    UNAUTHENTICATED: {
      msg: 'Unauthenticated!',
      statusCode: 401,
    },
    UNAUTHORIZATION: {
      msg: 'Unautherization',
      statusCode: 401,
    },
    EXISTED_USER: {
      msg: 'Existed user!',
      statusCode: 404,
    },
    USER_NOT_FOUND: {
      msg: 'User not found!',
      statusCode: 404,
    },
    EXISTED_USERNAME: {
      msg: 'Existed username',
      statusCode: 404,
    },
    BLOG_NOT_FOUND: {
      msg: 'Blog not found',
      statusCode: 404,
    },
    IS_DELETED: {
        msg: 'Blog is already deleted!',
        statusCode: 404,
    }
  };

export const CONSTANT_RESPONSE = {
  UPDATED: "Updated!",
  DELETED: "Deleted!",
  SUCCESS: "Successfully!"
}

export const PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
}