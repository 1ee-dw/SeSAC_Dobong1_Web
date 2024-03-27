import { useForm } from 'react-hook-form';

function UseForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // 단축 평가
    /* 
        &&:  여러 조건 중 하나라도 false면 전체 false
        ||:  여러 조건 중 하나라도 true면 전체 true
    */
    // console.log('단축평가 :: ||', false || 'hello');
    // console.log('단축평가 :: ||', true || 'hello');
    // console.log('단축평가 :: &&', false && 'hello');
    // console.log('단축평가 :: &&', true && 'hello');

    const onValid = (data) => console.log('onValid ' + data);
    const onInvalid = (data) => console.log('onInvalid ' + data);

    // const idReg = register('userId');
    // console.log(idReg);
    return (
        <>
            <h1>useForm 사용해보기</h1>
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                {/*
            handleSubmit(fn1[,fn2]) : 최대 두 개의 함수를 인자로 받을 수 있음 
            - fn1: 필수 / 유효할 때 실행
            - fn2: 선택 / 유효하지 않을 때 실행
            */}
                <div>
                    <input
                        type="text"
                        placeholder="이름"
                        {...register('userName', {
                            required: '이름을 입력해주세요',
                            minLength: 2,
                            message: '이름은 최소 2자 이상입니다.',
                        })}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="이메일"
                        {...register('email', {
                            required: '이메일을 입력해주세요',
                            validate: {
                                useGmail: (value) => {
                                    return value.includes('gmail.com') || 'gmail만 가능합니다';
                                },
                            },
                        })}
                    />
                </div>
                <div>
                    <input type="password" placeholder="비밀번호" />
                </div>
                <div>
                    <input type="submit" value="제출" />
                </div>
            </form>
        </>
    );
}

export default UseForm;
