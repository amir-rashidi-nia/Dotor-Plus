export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    public: { apiBase, secureItem },
  } = useRuntimeConfig();

  try {

    const data = await $fetch(`${apiBase}users?phone=${body.phone}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!data.length) {
      throw createError({
        status: 404,
        message: "کاربر وقت ثبت شده ایی ندارد.",
      });
    }
    
    if (data[0].code !== body.password) {
      throw createError({
        status: 403,
        message: "رمز عبور نادرست است.",
      });
    }

    setCookie(event, "phone", body.phone, {
      httpOnly: true,
      secure: secureItem,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    setResponseStatus(event, 200, "user found");

    return {
      data: data[0],
      status: 200,
      message: "user found",
    };

  } catch (error) {
    throw error;
  }
});
