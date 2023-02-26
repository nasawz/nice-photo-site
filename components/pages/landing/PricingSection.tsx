import * as React from 'react';

export interface IPricingSectionProps {
}

export default function PricingSection(props: IPricingSectionProps) {
    return (
        <section className="bg-white dark:nx-bg-neutral-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">服务价格</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">根据您的需求和预算，提供多种不同的服务方案</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                    <div className="min-w-full flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-neutral-600 xl:p-8 dark:bg-neutral-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">免费版</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 h-16">拥有基本的功能，适合个人使用。</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">免费</span>
                            <span className="text-gray-500 dark:text-gray-400"></span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> */}
                                <span>专辑数量限制: <span className="font-semibold">2套</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> */}
                                <span>相册数量限制: <span className="font-semibold">4册</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> */}
                                <span>图片空间限制: <span className="font-semibold">100MB</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>图片访问流量: <span className="font-semibold">500MB/月</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>&nbsp;</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>&nbsp;</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>&nbsp;</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>&nbsp;</span>
                            </li>
                            {/* <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="-3 -1 20 10" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M2.12828352,0.209507867 C2.15972235,0.225248664 2.1901615,0.242911498 2.21942799,0.262395986 L7.36331287,3.68652763 L12.5071978,0.262395986 C12.9007153,0.000407338131 13.4321081,0.10703258 13.6940967,0.50055013 C13.7135812,0.529816619 13.731244,0.560255774 13.7469848,0.591694603 L13.7848982,0.66741826 C14.0108835,1.11877503 13.8650618,1.66778411 13.4448926,1.9475164 L9.09731287,4.84152763 L13.4448926,7.73587281 C13.8650618,8.0156051 14.0108835,8.56461417 13.7848982,9.01597095 L13.7469848,9.0916946 C13.5353339,9.51442145 13.0210691,9.68553228 12.5983422,9.47388134 C12.5669034,9.45814054 12.5364642,9.44047771 12.5071978,9.42099322 L7.36331287,5.99552763 L2.21942799,9.42099322 C1.82591044,9.68298187 1.29451767,9.57635663 1.03252903,9.18283908 C1.01304454,9.15357259 0.995381705,9.12313343 0.979640907,9.0916946 L0.941727575,9.01597095 C0.715742197,8.56461417 0.861563952,8.0156051 1.28173317,7.73587281 L5.62831287,4.84152763 L1.28173317,1.9475164 C0.861563952,1.66778411 0.715742197,1.11877503 0.941727575,0.66741826 L0.979640907,0.591694603 C1.19129185,0.168967752 1.70555667,-0.0021430785 2.12828352,0.209507867 Z" ></path>
                                </svg>
                                <span>销售线索: <span className="font-semibold">不展示</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="-3 -1 20 10" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M2.12828352,0.209507867 C2.15972235,0.225248664 2.1901615,0.242911498 2.21942799,0.262395986 L7.36331287,3.68652763 L12.5071978,0.262395986 C12.9007153,0.000407338131 13.4321081,0.10703258 13.6940967,0.50055013 C13.7135812,0.529816619 13.731244,0.560255774 13.7469848,0.591694603 L13.7848982,0.66741826 C14.0108835,1.11877503 13.8650618,1.66778411 13.4448926,1.9475164 L9.09731287,4.84152763 L13.4448926,7.73587281 C13.8650618,8.0156051 14.0108835,8.56461417 13.7848982,9.01597095 L13.7469848,9.0916946 C13.5353339,9.51442145 13.0210691,9.68553228 12.5983422,9.47388134 C12.5669034,9.45814054 12.5364642,9.44047771 12.5071978,9.42099322 L7.36331287,5.99552763 L2.21942799,9.42099322 C1.82591044,9.68298187 1.29451767,9.57635663 1.03252903,9.18283908 C1.01304454,9.15357259 0.995381705,9.12313343 0.979640907,9.0916946 L0.941727575,9.01597095 C0.715742197,8.56461417 0.861563952,8.0156051 1.28173317,7.73587281 L5.62831287,4.84152763 L1.28173317,1.9475164 C0.861563952,1.66778411 0.715742197,1.11877503 0.941727575,0.66741826 L0.979640907,0.591694603 C1.19129185,0.168967752 1.70555667,-0.0021430785 2.12828352,0.209507867 Z" ></path>
                                </svg>
                                <span>服务价格: <span className="font-semibold">不展示</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="-3 -1 20 10" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M2.12828352,0.209507867 C2.15972235,0.225248664 2.1901615,0.242911498 2.21942799,0.262395986 L7.36331287,3.68652763 L12.5071978,0.262395986 C12.9007153,0.000407338131 13.4321081,0.10703258 13.6940967,0.50055013 C13.7135812,0.529816619 13.731244,0.560255774 13.7469848,0.591694603 L13.7848982,0.66741826 C14.0108835,1.11877503 13.8650618,1.66778411 13.4448926,1.9475164 L9.09731287,4.84152763 L13.4448926,7.73587281 C13.8650618,8.0156051 14.0108835,8.56461417 13.7848982,9.01597095 L13.7469848,9.0916946 C13.5353339,9.51442145 13.0210691,9.68553228 12.5983422,9.47388134 C12.5669034,9.45814054 12.5364642,9.44047771 12.5071978,9.42099322 L7.36331287,5.99552763 L2.21942799,9.42099322 C1.82591044,9.68298187 1.29451767,9.57635663 1.03252903,9.18283908 C1.01304454,9.15357259 0.995381705,9.12313343 0.979640907,9.0916946 L0.941727575,9.01597095 C0.715742197,8.56461417 0.861563952,8.0156051 1.28173317,7.73587281 L5.62831287,4.84152763 L1.28173317,1.9475164 C0.861563952,1.66778411 0.715742197,1.11877503 0.941727575,0.66741826 L0.979640907,0.591694603 C1.19129185,0.168967752 1.70555667,-0.0021430785 2.12828352,0.209507867 Z" ></path>
                                </svg>
                                <span>自定义域名前缀: <span className="font-semibold">不支持</span></span>
                            </li> */}

                        </ul>
                        <a href="/register" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">立即开通</a>
                    </div>

                    <div className="min-w-full flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-neutral-600 xl:p-8 dark:bg-neutral-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">高级版</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 h-16">提供更多高级功能，适合中型团队或个人专业摄影师使用。</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">¥99</span>
                            <span className="text-gray-500 dark:text-gray-400">/年</span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> */}
                                <span>专辑数量限制: <span className="font-semibold">无限</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> */}
                                <span>相册数量限制: <span className="font-semibold">无限</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> */}
                                <span>图片空间限制: <span className="font-semibold">1000MB</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>图片访问流量: <span className="font-semibold">4G/月</span></span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <span>销售线索: <span className="font-semibold">支持</span></span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <span>服务价格: <span className="font-semibold">支持</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="-3 -1 20 10" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M2.12828352,0.209507867 C2.15972235,0.225248664 2.1901615,0.242911498 2.21942799,0.262395986 L7.36331287,3.68652763 L12.5071978,0.262395986 C12.9007153,0.000407338131 13.4321081,0.10703258 13.6940967,0.50055013 C13.7135812,0.529816619 13.731244,0.560255774 13.7469848,0.591694603 L13.7848982,0.66741826 C14.0108835,1.11877503 13.8650618,1.66778411 13.4448926,1.9475164 L9.09731287,4.84152763 L13.4448926,7.73587281 C13.8650618,8.0156051 14.0108835,8.56461417 13.7848982,9.01597095 L13.7469848,9.0916946 C13.5353339,9.51442145 13.0210691,9.68553228 12.5983422,9.47388134 C12.5669034,9.45814054 12.5364642,9.44047771 12.5071978,9.42099322 L7.36331287,5.99552763 L2.21942799,9.42099322 C1.82591044,9.68298187 1.29451767,9.57635663 1.03252903,9.18283908 C1.01304454,9.15357259 0.995381705,9.12313343 0.979640907,9.0916946 L0.941727575,9.01597095 C0.715742197,8.56461417 0.861563952,8.0156051 1.28173317,7.73587281 L5.62831287,4.84152763 L1.28173317,1.9475164 C0.861563952,1.66778411 0.715742197,1.11877503 0.941727575,0.66741826 L0.979640907,0.591694603 C1.19129185,0.168967752 1.70555667,-0.0021430785 2.12828352,0.209507867 Z" ></path>
                                </svg> */}
                                <span>自定义域名前缀: <span className="font-semibold">支持</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>&nbsp;</span>
                            </li>
                        </ul>
                        <a href="/register" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">立即开通</a>
                    </div>

                    <div className="min-w-full flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-neutral-600 xl:p-8 dark:bg-neutral-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">专业版</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">拥有最完整的功能，独立部署到您的服务器上.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">¥899</span>
                            <span className="text-gray-500 dark:text-gray-400"></span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <span>专辑数量限制: <span className="font-semibold">无限</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>相册数量限制: <span className="font-semibold">无限</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>图片空间限制: <span className="font-semibold">无限</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>图片访问流量: <span className="font-semibold">无限</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>销售线索: <span className="font-semibold">支持</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>服务价格: <span className="font-semibold">支持</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>自定义域名: <span className="font-semibold">支持</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>私有部署: <span className="font-semibold">支持</span></span>
                            </li>
                        </ul>
                        <a href="/register" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">立即开通</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
