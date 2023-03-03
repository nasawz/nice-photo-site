import * as React from 'react';

export interface IScreenSectionProps {
}

export default function ScreenSection (props: IScreenSectionProps) {
  return (
    <div className="relative overflow-hidden  pt-8 sm:pt-12 lg:pt-16 bg-white dark:nx-bg-neutral-900">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
            {/* <h2 className="text-lg font-semibold text-primary-600">Serverless</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">轻松管理您的创意作品</p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500 dark:text-white" >
            无论您是初学者还是专业人士，NicePhoto的后台管理界面都能满足您的需求和期望，让您可以轻松管理和掌控自己的作品展示网站。
            </p>
        </div>
        <div className="mt-12 mb-10">
            <img
                className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://nice-photo-1256312109.cos.ap-shanghai.myqcloud.com/site/dashboard.jpg"
                alt=""
            />
        </div>
    </div>
</div>
  );
}
