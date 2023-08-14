import React, { useState } from 'react';
import Header from './Header';
const Faq = () => {

    const [showMsg, setShowMsg] = useState(false)

    return (
        <div>
            <Header />

            <div className=" md:w-10/12 mx-auto md:p-20 p-4">
                <h1 className="font-bold md:text-4xl  text-2xl font-Anek text-center">常见问题</h1>


                <div className="flex flex-wrap justify-center mt-20 font-Inter">

                    <div className="md:w-5/12 m-4 ">
                        <p className="text-xl font-bold py-2">什么是 Coverview？</p>
                        <p className="text-lg text-gray-700">Coverview 是一款快速、轻松地为博客创建封面图片的工具。</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold py-2">Coverview 是免费的吗？</p>
                        <p className="text-lg text-gray-700">是的！ Coverview 完全免费使用。</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl  font-bold py-2">我可以上传我的定制品牌徽标吗？</p>
                        <p className="text-lg text-gray-700">是的，只需在图标部分搜索并选择自定义，您就可以上传自己的徽标，<span className="font-semibold"> 个性化 </span>您的封面图片。</p>
                        <p className="italic mt-2">查看 <a href="https://twitter.com/WankhadeRutik/status/1518270774335111168?s=20&t=XMjbJpGAC7anadJ690_DUg" className="text-blue-400" target="_blank" rel="noreferrer">示例</a></p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">我可以在非技术/个人博客中使用 Coverview 吗？</p>
                        <p className="text-lg text-gray-700">是的！为什么不呢？尽管 coverview 是专为技术博客设计的，但您仍然可以将它用于个人博客。查看时尚主题，了解更多信息。</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">为什么使用 Coverview？</p>
                        <p className="text-lg text-gray-700">因为它简单、快捷、易于使用。几秒钟就能创建封面图像，为什么还要花几个小时来设计呢？</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">想要支持/赞助该项目？</p>
                        <p className="text-lg text-gray-700">如果 Coverview 为您的生活增添了价值，并且您希望支持这一项目, 你可以 <a href="https://github.com/sponsors/rutikwankhade" target="_blank" rel="noreferrer" className="font-semibold hover:underline">在 Github 上赞助 @rutikwankhade</a> or <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="hover:underline text-pink-400 font-semibold">请 @rutikwankhade 喝咖啡</a>.</p>
                    </div>

                </div>

                <div className="md:w-1/2 mx-auto text-center mt-20">
                    <button
                        onClick={() => setShowMsg(!showMsg)}
                        className="text-6xl text-center m-2">💡</button>
                    <p className="text-xl font-Anek font-semibold text-gray-800">想知道秘密吗？点击我</p>

                </div>

                {
                    showMsg ?
                        <div>
                            <h2 className="md:w-7/12 text-4xl border text-center mx-auto my-10 p-10 rounded-xl shadow-sm font-Nunito">博客标题至少包含 8 个字，点击率提高 21%</h2>
                        </div> :
                        <div></div>
                }

            </div>
        </div>
    );
}

export default Faq;