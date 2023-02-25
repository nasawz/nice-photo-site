"use client"

import * as React from 'react';
import axios from "axios";
import { useToast } from '@/hooks/use-toast';
import { useForm } from "react-hook-form";
import _ from 'lodash';
import { Button } from '@components/ui/button';
import { Loader2 } from 'lucide-react';
import { ToastAction } from '@components/ui/toast';
import Head from 'next/head';

export interface IRegisterPageProps {
}

export default function RegisterPage(props: IRegisterPageProps) {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setSubmitting] = React.useState(false);
    const { toast } = useToast()
    const onSubmit = (data) => doRegister(data);
    const onError = (errors, e) => {
        _.reverse(_.values(errors)).map((err) => {
            toast({
                variant: "destructive",
                description: err.message,
            })
        })
    };

    const formRef = React.useRef(null);

    const doRegister = (data) => {
        setSubmitting(true)
        const { username, password } = data;
        axios.post('/api/register', {
            username, password
        }).then((res) => {
            toast({
                description: res.data.message,
                action: <ToastAction altText="signin" onClick={()=>{
                    window.location.href = 'https://nice-photo-manage.xiangshi.app/'
                }}>登录</ToastAction>,
            })
        }).catch((err) => {
            toast({
                variant: "destructive",
                description: err.response.data.error,
            })
        }).finally(() => {
            setSubmitting(false)
        })
    }

    const disableAutocomplete = {
        autoComplete: "off"
    }

    return (
     <>
     <Head>
         <title>注册</title>
     </Head>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="/favicon.svg" alt="logo" />
                    NicePhoto
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            注册
                        </h1>
                        <form ref={formRef} className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit, onError)} autoComplete='off'>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">用户名</label>
                                <input {...disableAutocomplete} type="text" {...register("username", { required: "请输入用户名", })} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
                                <input  {...disableAutocomplete} type="password" {...register("password", { required: "请输入密码", })} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">再次输入密码</label>
                                <input type="password"
                                    {...register("confirm-password", {
                                        required: "请再次输入密码",
                                        validate: {
                                            "same": (value) => value !== getValues("password") ? "两次输入的密码不一致" : undefined,
                                        }
                                    })}
                                    name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input {...register("agreement", { required: "请阅读并同意我们的用户协议" })} id="agreement" aria-describedby="agreement" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="agreement" className="font-light text-gray-500 dark:text-gray-300"><a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/agreement" target={'_blank'}>已阅读并同意我们的用户协议</a></label>
                                </div>
                            </div>
                            <Button type={'submit'} disabled={isSubmitting} className="w-full text-white !bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                创建账号
                            </Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                已有账号? <a href="https://nice-photo-manage.xiangshi.app/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">点击这里登录</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     </>
    );
}