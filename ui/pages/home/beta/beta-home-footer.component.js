import React, { useContext } from 'react';

import { SUPPORT_REQUEST_LINK } from '../../../helpers/constants/common';
import { useI18nContext } from '../../../hooks/useI18nContext';
import {
  EVENT,
  EVENT_NAMES,
  CONTEXT_PROPS,
} from '../../../../shared/constants/metametrics';
import { MetaMetricsContext } from '../../../contexts/metametrics';

const BetaHomeFooter = () => {
  const t = useI18nContext();
  const trackEvent = useContext(MetaMetricsContext);

  const SUPPORT_LINK =
    'https://docs.google.com/forms/d/e/1FAIpQLSfpkpeVMvfFw_1CWzrs5M3TEqE9VPMSspLPJgk1u4ZyUkQRbg/viewform?usp=sharing';

  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={SUPPORT_LINK}
        onClick={() => {
          trackEvent(
            {
              category: EVENT.CATEGORIES.FOOTER,
              event: EVENT_NAMES.SUPPORT_LINK_CLICKED,
              properties: {
                url: SUPPORT_REQUEST_LINK,
              },
            },
            {
              contextPropsIntoEventProperties: [CONTEXT_PROPS.PAGE_TITLE],
            },
          );
        }}
      >
        {t('needHelpSubmitTicket')}
      </a>{' '}
      |{' '}
      <a href={SUPPORT_LINK} target="_blank" rel="noopener noreferrer">
        {t('needHelpFeedback')}
      </a>
    </>
  );
};

export default BetaHomeFooter;
