export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { public: { apiBase, secureItem } } = useRuntimeConfig();

  async function checkUserExist(phone) {
    const data = await $fetch(`${apiBase}users?phone=${phone}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if(data.length) {
      return data
    }
    return false;
  }

  try {
    const user = await checkUserExist(body.phone);
    if(user?.[0]) {
      return {
        data: user[0],
        status: 200,
        message: 'user already exist'
      }
    }

    const data = await $fetch(`${apiBase}users`, {
      method: "POST",
      body: body,
      headers: {
        Accept: "application/json",
      },
    });

    setCookie(event, "phone", body.phone, {
      httpOnly: true,
      secure: secureItem,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    setResponseStatus(event, 201, 'user created')

    return {
      data: data[0],
      status: 201,
      message: 'user created'
    };

  } catch (error) {
    return error;
  }
});
