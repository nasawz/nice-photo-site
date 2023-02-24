import * as React from 'react';

export interface IContentSectionProps {
}

export default function ContentSection(props: IContentSectionProps) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">轻松打造属于你的创意空间</h2>
                    <p className="mb-4 text-gray-900 dark:text-white">无论你是摄影师、设计师、艺术家还是创作者，我们的平台都可以满足你的需求。</p>
                    <p className='text-gray-900 dark:text-white'>平台提供了多种展示方式和定制化的功能，让你的作品展示更加独特和个性化。通过我们的平台，你可以建立自己的个人品牌，并与更多的人建立起联系和合作。</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                </div>
            </div>
        </section>
    );
}
