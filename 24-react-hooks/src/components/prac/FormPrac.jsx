import { useForm } from 'react-hook-form';

function FormPrac() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onValid = (data) => console.log(data);
    const onInvalid = (data) => console.log(data);
    const submit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <form onSubmit={(submit, handleSubmit(onValid, onInvalid))}>
                <div>
                    <input type="text" placeholder="이름" {...register('name', { required: '이름은 필수 항목입니다.' })} />
                </div>
                {errors.name?.message}
                <div>
                    <input
                        type="number"
                        placeholder="나이"
                        {...register('age', {
                            required: '0 이상의 숫자만 가능합니다',
                            validate: {
                                minAge: (value) => {
                                    return value > 0 || '0 이상의 숫자만 가능합니다';
                                },
                            },
                        })}
                    />
                </div>
                {errors.age?.message}
                <div>
                    <input type="submit" value="제출" />
                </div>
            </form>
        </>
    );
}

export default FormPrac;
