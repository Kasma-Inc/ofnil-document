export default {
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '中文' },
  ],
  docsRepositoryBase: 'https://github.com/Kasma-Inc/ofnil-document/tree/main/',
  logo: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 64 64"
        fill="none"
      >
        <script
          xmlns=""
          id="argent-x-extension"
          data-extension-id="dlcobpjiigpikoobohmabehhmhfoodbb"
        />
        <script xmlns="" />
        <path
          d="M64 23.3635V52.0977L57.2146 54.7288L57.2607 48.405H57.2146L50.4522 45.7508V28.3949C50.4522 25.833 48.9059 23.502 46.5287 22.5326L33.8118 17.3166L38.4969 21.8402V49.2128C38.4969 51.8438 36.5582 54.9365 34.0887 55.9059C33.2809 56.2521 32.4039 56.4367 31.5499 56.4367C30.6498 56.4367 29.7959 56.2521 28.965 55.929L16.4789 50.8976C16.4328 50.8976 16.4097 50.8976 16.3635 50.8514L4.56978 46.1432C1.80021 45.0353 0 42.335 0 39.3808V13.3238L12.7169 7.73855L22.9181 11.5005V21.8402L14.8402 18.8399C13.4093 18.309 11.9091 19.3476 11.9091 20.8709V33.7032C11.9091 36.6805 13.7093 39.3808 16.4789 40.5117L22.6873 43.0505C23.9567 43.5582 25.3415 42.6351 25.3415 41.2734V13.7623C25.3415 11.1082 26.8417 8.63865 29.2651 7.60007C30.1652 7.20771 31.1114 7 32.1039 7C32.9578 7 33.7887 7.16156 34.5965 7.46159L39.5586 9.42337L59.9841 17.4551C62.4075 18.4014 64 20.7555 64 23.3635Z"
          fill="#2E3092"
        />
        <path
          d="M40.9426 48.382V53.7134L50.4745 57.3138L57.2369 54.7058L50.4745 52.0978L40.9426 48.382Z"
          fill="#2E3092"
        />
        <script xmlns="" />
      </svg>

      <span style={{ marginLeft: '0.5em', fontWeight: 700, fontSize: 14 }}>
        OFNIL DOCUMENTATION
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/Kasma-Inc/ofnil-document',
  },
  feedback: {
    useLink: () => 'https://feedback.kasma.ai',
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Kasma, Inc. All Rights Reserved.
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};
