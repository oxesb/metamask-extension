import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Jazzicon from '../../ui/jazzicon/jazzicon.component';
import BlockieIdenticon from '../../ui/identicon/blockieIdenticon/blockieIdenticon.component';
import { AvatarBase } from '../avatar-base';
import { Size } from '../../../helpers/constants/design-system';
import Box from '../../ui/box/box';

import {
  AvatarAccountDiameter,
  AvatarAccountVariant,
  AvatarAccountSize,
} from './avatar-account.types';

export const AvatarAccount = ({
  size = Size.MD,
  address,
  className,
  variant,
  ...props
}) => {
  return (
    <AvatarBase
      size={size}
      className={classnames('mm-avatar-account', className)}
      {...props}
    >
      {variant === 'Jazzicon' ? (
        <Jazzicon
          className={classnames('mm-avatar-account__jazzicon')}
          address={address}
          diameter={Number(AvatarAccountDiameter[size])}
        />
      ) : (
        <BlockieIdenticon
          className={classnames('mm-avatar-account__blockie')}
          address={address}
          diameter={Number(AvatarAccountDiameter[size])}
          borderRadius="50%"
        />
      )}
    </AvatarBase>
  );
};

AvatarAccount.propTypes = {
  /**
   * The size of the AvatarAccount.
   * Possible values could be 'SIZES.XS', 'SIZES.SM', 'SIZES.MD', 'SIZES.LG', 'SIZES.XL'
   * Defaults to SIZES.MD
   */
  size: PropTypes.oneOf(Object.values(AvatarAccountSize)),
  /**
   * The variant of the avatar to be rendered, it can render either a Jazzicon or a Blockie
   */
  variant: PropTypes.oneOf(Object.values(AvatarAccountVariant)),
  /**
   * Address used for generating random image
   */
  address: PropTypes.string.isRequired,
  /**
   * Add custom css class
   */
  className: PropTypes.string,
  /**
   * AvatarAccount also accepts all Box props including but not limited to
   * className, as(change root element of HTML element) and margin props
   */
  ...Box.propTypes,
};
