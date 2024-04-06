import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';

import { HomePage } from '@/page/HomePage';
import { NotFoundPage } from '@/page/NotFoundPage';
import { AboutUsPage } from '@/page/AboutUsPage';
import { PrivacyPolicyPage } from '@/page/PrivacyPolicyPage';
import { TermsConditionsPage } from '@/page/TermsConditionsPage';
import { SostenaCSPage } from '@/page/CaseStudySostena';
import { PathableCSPage } from '@/page/CaseStudyPathable';
import { MeteorCSPage } from '@/page/CaseStudyMeteor';
import { PetParkerCSPage } from '@/page/CaseStudyPetParker';
import { MontiApmCSPage } from '@/page/CaseStudyMontiAPM';
import { AklivityCSPage } from '@/page/CaseStudyAklivity';
import { UnlocCSPage } from '@/page/CaseStudyUnloc';
import { LempireCSPage } from '@/page/CaseStudyLempire';
import { SneakpeekCSPage } from '@/page/CaseStudySneakpeak';
import { EatFreshCSPage } from '@/page/CaseStudyEatFresh';
import { FavroCSPage } from '@/page/CaseStudyFavro';
import { BemarkeCSPage } from '@/page/CaseStudyBemarke';
import { PoliDigitalCSPage } from '@/page/CaseStudyPoliDigital';
import { ZcloudCSPage } from '@/page/CaseStudyZcloud';
import { CaseStudiesPage } from '@/page/CaseStudies';
import { WebDevServicePage } from '@/page/ServiceWebDev';
import { MobileDevServicePage } from '@/page/ServiceMobileDev';
import { DesignServicePage } from '@/page/ServiceDesign';
import { ConsultingServicePage } from '@/page/ServiceConsulting';
import { CloudSolutionsServicePage } from '@/page/ServiceCloudSolutions';
import { MarketingWebsitesServicePage } from '@/page/ServiceWebsites';
import { PerformanceAnalysisServicePage } from '@/page/ServicePerfomanceAnalysis';
import { MeteorServicePage } from '@/page/ServiceMeteor';
import { ReferralPage } from '@/page/Referral';
import { EducationPage } from "@/page/EducationPage";

export const AppRoutes = ({ toggleContactUs }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route
        path={RoutePaths.HOME}
        element={<HomePage toggleContactUs={toggleContactUs} />}
      />
      <Route path={RoutePaths.CASE_STUDIES} element={<CaseStudiesPage />} />
      <Route path={RoutePaths.CASE_STUDY_SOSTENA} element={<SostenaCSPage />} />
      <Route
        path={RoutePaths.CASE_STUDY_PATHABLE}
        element={<PathableCSPage />}
      />
      <Route path={RoutePaths.CASE_STUDY_METEOR} element={<MeteorCSPage />} />
      <Route
        path={RoutePaths.CASE_STUDY_PETPARKER}
        element={<PetParkerCSPage />}
      />
      <Route
        path={RoutePaths.CASE_STUDY_MONTIAPM}
        element={<MontiApmCSPage />}
      />
      <Route
        path={RoutePaths.CASE_STUDY_AKLIVITY}
        element={<AklivityCSPage />}
      />
      <Route path={RoutePaths.CASE_STUDY_UNLOC} element={<UnlocCSPage />} />
      <Route path={RoutePaths.CASE_STUDY_LEMPIRE} element={<LempireCSPage />} />
      <Route
        path={RoutePaths.CASE_STUDY_SNEAKPEEK}
        element={<SneakpeekCSPage />}
      />
      <Route
        path={RoutePaths.CASE_STUDY_EATFRESH}
        element={<EatFreshCSPage />}
      />
      <Route path={RoutePaths.CASE_STUDY_FAVRO} element={<FavroCSPage />} />
      <Route path={RoutePaths.CASE_STUDY_BEMARKE} element={<BemarkeCSPage />} />
      <Route
        path={RoutePaths.CASE_STUDY_POLIDIGITAL}
        element={<PoliDigitalCSPage />}
      />
      <Route path={RoutePaths.CASE_STUDY_ZCLOUD} element={<ZcloudCSPage />} />
      <Route
        path={RoutePaths.SERVICES_WEB_DEV}
        element={<WebDevServicePage toggleContactUs={toggleContactUs} />}
      />
      <Route
        path={RoutePaths.SERVICES_MOBILE_DEV}
        element={<MobileDevServicePage toggleContactUs={toggleContactUs} />}
      />
      <Route
        path={RoutePaths.SERVICES_MOBILE_DEV}
        element={<MobileDevServicePage toggleContactUs={toggleContactUs} />}
      />
      <Route
        path={RoutePaths.SERVICES_DESIGN}
        element={<DesignServicePage toggleContactUs={toggleContactUs} />}
      />
      <Route
        path={RoutePaths.SERVICES_CONSULTING}
        element={<ConsultingServicePage toggleContactUs={toggleContactUs} />}
      />
      <Route
        path={RoutePaths.SERVICES_DEVOPS}
        element={
          <CloudSolutionsServicePage toggleContactUs={toggleContactUs} />
        }
      />
      <Route
        path={RoutePaths.SERVICES_MARKETING_WEBSITES}
        element={
          <MarketingWebsitesServicePage toggleContactUs={toggleContactUs} />
        }
      />
      <Route
        path={RoutePaths.SERVICES_PERFORMANCE_ANALYSIS}
        element={
          <PerformanceAnalysisServicePage toggleContactUs={toggleContactUs} />
        }
      />
      <Route
        path={RoutePaths.SERVICES_METEOR}
        element={<MeteorServicePage toggleContactUs={toggleContactUs} />}
      />
      <Route path={RoutePaths.REFERRAL} element={<ReferralPage />} />
      <Route path={RoutePaths.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
      <Route
        path={RoutePaths.TERMS_AND_CONDITIONS}
        element={<TermsConditionsPage />}
      />
      <Route path={RoutePaths.EDUCATION} element={<EducationPage />} />
      <Route path={RoutePaths.ABOUT_US} element={<AboutUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
