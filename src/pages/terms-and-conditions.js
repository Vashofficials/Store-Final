import React from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const TermAndConditions = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <Layout
      title="Terms & Conditions"
      description="This is terms and conditions page"
    >
      <PageHeader
        headerBg={storeCustomizationSetting?.term_and_condition?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.term_and_condition?.title
        )}
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          <CMSkeleton
            html
            count={15}
            height={15}
            error={error}
            loading={loading}
            data={storeCustomizationSetting?.term_and_condition?.description}
          />
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          {/* <div className="mb-6 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:terms-condition-cookies")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:terms-condition-cookies-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:terms-condition-license")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:terms-condition-license-docs")}</p>

              <ul>
                <strong className="mb-2">
                  {" "}
                  {t("common:terms-condition-license-docs0")}
                </strong>
                <li>{t("common:terms-condition-license-docs1")}</li>
                <li>{t("common:terms-condition-license-docs2")}</li>
                <li>{t("common:terms-condition-license-docs3")}</li>
                <li>{t("common:terms-condition-license-docs4")}</li>
                <li> {t("common:terms-condition-license-docs5")}</li>
                <li>{t("common:terms-condition-license-docs6")}</li>
                <li>{t("common:terms-condition-license-docs7")}</li>
              </ul>
              <p>{t("common:terms-condition-license-docs8")}</p>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-liability")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-liability-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-privacy")}
              </h2>
              <div className="font-sans leading-7">
                <p>
                  {t("common:terms-condition-privacy-docs1")}
                  <Link href="/privacy-policy" className="text-emerald-500">
                 
                      {t("common:terms-condition-privacy-docs2")}
               
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-rights")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-rights-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-website")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-website-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-disclaimer")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-disclaimer-docs")}</p>
                <ul>
                  <li>{t("common:terms-condition-disclaimer-docs1")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs2")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs3")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs4")}</li>
                </ul>
                <p>{t("common:terms-condition-disclaimer-docs5")}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default TermAndConditions;
