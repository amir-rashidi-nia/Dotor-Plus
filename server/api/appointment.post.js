export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {
    public: { apiBase },
  } = useRuntimeConfig();

  async function getAppointment(appointmentId) {
    const data = await $fetch(`${apiBase}appointments/${appointmentId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    return data;
  }

  try {
    const appointment = await getAppointment(body.appointmentId);

    if(appointment.userId) {
        throw createError({
            status: 403,
            statusMessage: 'Forbbiden',
            message: 'وقت موردنظر گرفته شده است.'
        })
    }

    const data = await $fetch(`${apiBase}appointments/${body.appointmentId}`, {
      method: "PUT",
      body: {
        ...appointment,
        userId: body.userId
      },
      headers: {
        Accept: "application/json",
      },
    });
    setResponseStatus(event, 200, "appointment set");

    return {
      data,
      status: 200,
      message: "appointment set",
    };
  } catch (error) {
    return error;
  }
});
