export default defineEventHandler(async (event) => {
  const {
    public: { apiBase, secureItem },
  } = useRuntimeConfig();

  const phone = getCookie(event, "phone");
  try {
    const data = await $fetch(`${apiBase}users?phone=${phone}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!data.length) {
      throw createError({
        status: 401,
        message: "کاربری وجود ندارد.",
      });
    }

    return {
        data: data[0],
        status: 200
    };

  } catch (error) {
    if (error.status == 401) {
      setCookie(event, "phone", "", {
        httpOnly: true,
        secure: secureItem,
        expires: new Date(0),
        path: "/",
      });
    }

    return error;
  }
});
