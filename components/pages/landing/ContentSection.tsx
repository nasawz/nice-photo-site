import * as React from 'react';

export interface IContentSectionProps {
}

export default function ContentSection(props: IContentSectionProps) {
    return (
        <>
            {/* <section className="bg-white dark:nx-bg-neutral-900">
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
            </section> */}
            <div className="relative overflow-hidden bg-white dark:nx-bg-neutral-900 pt-16 pb-32">
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                             
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">轻松打造属于您的创意空间</h2>
                                    <p className="mt-4 text-lg text-gray-500 ">
                                    无论你是摄影师、设计师、艺术家还是创作者，我们的平台都可以满足你的需求。平台提供了多种展示方式和定制化的功能，让你的作品展示更加独特和个性化。通过我们的平台，你可以建立自己的个人品牌，并与更多的人建立起联系和合作。
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="/register"
                                            className="inline-flex rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700"
                                        >
                                            开始使用
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <blockquote>
                                    <div>
                                        <p className="text-base text-gray-500 dark:text-white">
                                            &ldquo;NicePhoto让我能够在一个专业的平台上展示我的时装设计作品，而且非常易于使用。我可以以最佳的方式展示我的设计，让我的客户和粉丝更加了解我的品牌和风格。&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-6 w-6 rounded-full"
                                                    src="https://nice-photo-1256312109.cos.ap-shanghai.myqcloud.com/site/face/Emily.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text-base font-medium text-gray-700 dark:text-gray-500">Emily Chen, 时装设计师</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="https://nice-photo-1256312109.cos.ap-shanghai.myqcloud.com/site/portal.jpg"
                                    alt="Inbox user interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                            <div>
                          
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">用设计诠释品牌</h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                    展示你的灵感、创意与专业素养，打造个性艺术空间，让每一件作品都代表着你的个性和品味。
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="/register"
                                            className="inline-flex rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700"
                                        >
                                            开始使用
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <blockquote>
                                    <div>
                                        <p className="text-base text-gray-500 dark:text-white">
                                            &ldquo;我非常喜欢使用NicePhoto来展示我的艺术作品。它让我能够以高品质的方式展示我的作品，让观众感受到我的作品所传达的情感。我还可以轻松地管理和分享我的作品，让更多人看到它们。&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-6 w-6 rounded-full"
                                                    src="https://nice-photo-1256312109.cos.ap-shanghai.myqcloud.com/site/face/Olivia.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text-base font-medium text-gray-700 dark:text-gray-500">Olivia Lee, 绘画艺术家</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="https://nice-photo-1256312109.cos.ap-shanghai.myqcloud.com/site/coffee.jpg"
                                    alt="Customer profile user interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
