import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '../../ui/box';
import Dialog from '../../ui/dialog';
import Typography from '../../ui/typography/typography';
import {
  COLORS,
  TYPOGRAPHY,
  TEXT_ALIGN,
  FONT_WEIGHT,
  DISPLAY,
  ICON_COLORS,
} from '../../../helpers/constants/design-system';
import { useI18nContext } from '../../../hooks/useI18nContext';
import Button from '../../ui/button';
import { EXPERIMENTAL_ROUTE } from '../../../helpers/constants/routes';
import { Icon, ICON_NAMES } from '../../component-library';

export default function CollectiblesDetectionNotice() {
  const t = useI18nContext();
  const history = useHistory();

  return (
    <Box className="collectibles-detection-notice">
      <Dialog type="message" className="collectibles-detection-notice__message">
        <Box display={DISPLAY.FLEX}>
          <Box paddingTop={1}>
            <Icon name={ICON_NAMES.INFO} color={ICON_COLORS.PRIMARY_DEFAULT} />
          </Box>
          <Box paddingLeft={2}>
            <Typography
              color={COLORS.TEXT_DEFAULT}
              align={TEXT_ALIGN.LEFT}
              variant={TYPOGRAPHY.H7}
              fontWeight={FONT_WEIGHT.BOLD}
            >
              {t('newNFTsDetected')}
            </Typography>
            <Typography
              color={COLORS.TEXT_DEFAULT}
              align={TEXT_ALIGN.LEFT}
              variant={TYPOGRAPHY.H7}
              boxProps={{ marginBottom: 4 }}
            >
              {t('newNFTDetectedMessage')}
            </Typography>
            <Button
              type="link"
              onClick={(e) => {
                e.preventDefault();
                history.push(`${EXPERIMENTAL_ROUTE}#autodetect-nfts`);
              }}
              className="collectibles-detection-notice__message__link"
            >
              {t('selectNFTPrivacyPreference')}
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
