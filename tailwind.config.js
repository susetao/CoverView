module.exports = {
  // 定义了Tailwind CSS需要处理的文件路径
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 包括src目录下所有.js, .jsx, .ts, .tsx文件
  ],
  theme: {
    extend: {
      // 扩展Tailwind CSS的主题设置
      fontFamily: {
        // 定义自定义字体
        Inter: ['Inter', 'sans-serif'], // Inter字体，如果Inter不可用，则使用sans-serif
        Poppins: ['Poppins', 'sans-serif'], // Poppins字体，如果Poppins不可用，则使用sans-serif
        Anek: ['Anek Latin', 'sans-serif'], // Anek Latin字体，如果Anek Latin不可用，则使用sans-serif
        Nunito: ['Nunito', 'sans-serif'], // Nunito字体，如果Nunito不可用，则使用sans-serif
      }
    },
  },
  plugins: [], // 当前没有使用额外的插件

  // 此配置文件用于Tailwind CSS，一个功能类优先的CSS框架
  // 它定义了项目中的文件路径、主题设置和使用的插件
};
