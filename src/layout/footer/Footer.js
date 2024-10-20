import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

//internal import
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const Footer = () => {
  const { t } = useTranslation();
  const userInfo = getUserSession();

  const { showingTranslateValue } = useUtilsFunction();
  const { loading, storeCustomizationSetting } = useGetSetting();

  return (
    <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
          {storeCustomizationSetting?.footer?.block1_status && (
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                <CMSkeleton
                  count={1}
                  height={20}
                  // error={error}
                  loading={loading}
                  data={storeCustomizationSetting?.footer?.block1_title}
                />
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link
                    href={`${storeCustomizationSetting?.footer?.block1_sub_link1}`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block1_sub_title1
                      }
                    />
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${storeCustomizationSetting?.footer?.block1_sub_link2}`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block1_sub_title2
                      }
                    />
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${storeCustomizationSetting?.footer?.block1_sub_link3}`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.footer_block_one_link_three_title
                    )}
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block1_sub_title3
                      }
                    />
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${storeCustomizationSetting?.footer?.block1_sub_link4}`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block1_sub_title4
                      }
                    />
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {storeCustomizationSetting?.footer?.block2_status && (
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                <CMSkeleton
                  count={1}
                  height={20}
                  // error={error}
                  loading={loading}
                  data={storeCustomizationSetting?.footer?.block2_title}
                />
              </h3>
              <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link
                    href={`${storeCustomizationSetting?.footer?.block2_sub_link1}`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block2_sub_title1
                      }
                    />
                  </Link>
                </li>

                <li className="flex items-baseline">
                  <Link
                    href={`${storeCustomizationSetting?.footer?.block2_sub_link2}`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block2_sub_title2
                      }
                    />
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${storeCustomizationSetting?.footer?.block2_sub_link3}`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block2_sub_title3
                      }
                    />
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${storeCustomizationSetting?.footer?.block2_sub_link4}`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block2_sub_title4
                      }
                    />
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {storeCustomizationSetting?.footer?.block3_status && (
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                <CMSkeleton
                  count={1}
                  height={20}
                  // error={error}
                  loading={loading}
                  data={storeCustomizationSetting?.footer?.block3_title}
                />
              </h3>
              <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link
                    href={`${
                      userInfo?.email
                        ? storeCustomizationSetting?.footer?.block3_sub_link1
                        : "#"
                    }`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block3_sub_title1
                      }
                    />
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${
                      userInfo?.email
                        ? storeCustomizationSetting?.footer?.block3_sub_link2
                        : "#"
                    }`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block3_sub_title2
                      }
                    />
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${
                      userInfo?.email
                        ? storeCustomizationSetting?.footer?.block3_sub_link3
                        : "#"
                    }`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block3_sub_title3
                      }
                    />
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${
                      userInfo?.email
                        ? storeCustomizationSetting?.footer?.block3_sub_link4
                        : "#"
                    }`}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    <CMSkeleton
                      count={1}
                      height={10}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.footer?.block3_sub_title4
                      }
                    />
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {storeCustomizationSetting?.footer?.block4_status && (
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <Link
                href="/"
                className="mr-3 lg:mr-12 xl:mr-12"
                rel="noreferrer"
              >
                <div className="relative w-32 h-10">
                  <Image
                    // width={110}
                    // height={40}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                    src={
                      storeCustomizationSetting?.footer?.block4_logo ||
                      "/logo/logo-color.svg"
                    }
                    alt="logo"
                  />
                </div>
              </Link>
              <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
                <CMSkeleton
                  count={1}
                  height={10}
                  // error={error}
                  loading={loading}
                  data={storeCustomizationSetting?.footer?.block4_address}
                />
                <br />
                <span>
                  {" "}
                  Tel : {storeCustomizationSetting?.footer?.block4_phone}
                </span>
                <br />
                <span>
                  {" "}
                  Email : {storeCustomizationSetting?.footer?.block4_email}
                </span>
              </p>
            </div>
          )}
        </div>

        <hr className="hr-line"></hr>

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
            <div className="col-span-1">
              {storeCustomizationSetting?.footer?.social_links_status && (
                <div>
                  {(storeCustomizationSetting?.footer?.social_facebook ||
                    storeCustomizationSetting?.footer?.social_twitter ||
                    storeCustomizationSetting?.footer?.social_pinterest ||
                    storeCustomizationSetting?.footer?.social_linkedin ||
                    storeCustomizationSetting?.footer?.social_whatsapp) && (
                    <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                      {t("common:footer-follow-us")}
                    </span>
                  )}
                  <ul className="text-sm flex">
                    {storeCustomizationSetting?.footer?.social_facebook && (
                      <li className="flex items-center mr-3 transition ease-in-out duration-500">
                        <Link
                          href={`${storeCustomizationSetting?.footer?.social_facebook}`}
                          aria-label="Social Link"
                          rel="noreferrer"
                          target="_blank"
                          className="block text-center mx-auto text-gray-500 hover:text-white"
                        >
                          <FacebookIcon size={34} round />
                        </Link>
                      </li>
                    )}
                    {storeCustomizationSetting?.footer?.social_twitter && (
                      <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                        <Link
                          href={`${storeCustomizationSetting?.footer?.social_twitter}`}
                          aria-label="Social Link"
                          rel="noreferrer"
                          target="_blank"
                          className="block text-center mx-auto text-gray-500 hover:text-white"
                        >
                          <TwitterIcon size={34} round />
                        </Link>
                      </li>
                    )}
                    {storeCustomizationSetting?.footer?.social_pinterest && (
                      <li className="flex items-center mr-3 transition ease-in-out duration-500">
                        <Link
                          href={`${storeCustomizationSetting?.footer?.social_pinterest}`}
                          aria-label="Social Link"
                          rel="noreferrer"
                          target="_blank"
                          className="block text-center mx-auto text-gray-500 hover:text-white"
                        >
                          <PinterestIcon size={34} round />
                        </Link>
                      </li>
                    )}
                    {storeCustomizationSetting?.footer?.social_linkedin && (
                      <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                        <Link
                          href={`${storeCustomizationSetting?.footer?.social_linkedin}`}
                          aria-label="Social Link"
                          rel="noreferrer"
                          target="_blank"
                          className="block text-center mx-auto text-gray-500 hover:text-white"
                        >
                          <LinkedinIcon size={34} round />
                        </Link>
                      </li>
                    )}
                    {storeCustomizationSetting?.footer?.social_whatsapp && (
                      <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                        <Link
                          href={`${storeCustomizationSetting?.footer?.social_whatsapp}`}
                          aria-label="Social Link"
                          rel="noreferrer"
                          target="_blank"
                          className="block text-center mx-auto text-gray-500 hover:text-white"
                        >
                          <WhatsappIcon size={34} round />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="col-span-1 text-center hidden lg:block md:block">
              {storeCustomizationSetting?.footer?.bottom_contact_status && (
                <div>
                  <p className="text-base leading-7 font-medium block">
                    {t("common:footer-call-us")}
                  </p>
                  <h5 className="text-2xl font-bold text-emerald-500 leading-7">
                    {/* +012345-67900 */}
                    {storeCustomizationSetting?.footer?.bottom_contact}
                  </h5>
                </div>
              )}
            </div>
            {storeCustomizationSetting?.footer?.payment_method_status && (
              <div className="col-span-1 hidden lg:block md:block">
                <ul className="lg:text-right">
                  <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                    <Image
                      width={274}
                      height={85}
                      className="w-full"
                      src={
                        storeCustomizationSetting?.footer?.payment_method_img ||
                        "/payment-method/payment-logo.png"
                      }
                      alt="payment method"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
        <p className="text-sm text-gray-500 leading-6">
          Copyright 2024 @{" "}
          <Link
            href="https://themeforest.net/user/htmllover"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500"
          >
            HtmlLover
          </Link>
          , All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
