export const useStore = () => {
    const route = useRoute()
    const authUser = useState('auth_user', () => null);
    const doctorId = useState('doctor_id', () => null);
    const departmentName = useState('department_name', () => null);
    const appointmentStep = useState('appointment_step', () => 0);

    watch(() => route.path, () => {
        appointmentStep.value = null
    })
    
    return { authUser, appointmentStep, doctorId, departmentName }
}