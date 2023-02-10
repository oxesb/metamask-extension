/* eslint-disable jest/require-top-level-describe */
import { render } from '@testing-library/react';
import React from 'react';
import { AvatarAccount, AvatarAccountSize } from '.';
import 'jest-canvas-mock';

describe('AvatarAccount', () => {
  const args = {
    address: '0x5CfE73b6021E818B776b421B1c4Db2474086a7e1',
    variant: 'Jazzicon',
  };
  it('should render correctly', () => {
    const { getByTestId, container } = render(
      <AvatarAccount data-testid="avatar-account" {...args} />,
    );
    expect(getByTestId('avatar-account')).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should render Jazzicon correctly', () => {
    const container = (
      <AvatarAccount
        data-testid="avatar-account"
        {...args}
        variant="Jazzicon"
      />
    );
    expect(container.props.variant).toStrictEqual('Jazzicon');
  });

  it('should render Blockie correctly', () => {
    const container = (
      <AvatarAccount data-testid="avatar-account" {...args} variant="Blockie" />
    );
    expect(container.props.variant).toStrictEqual('Blockie');
  });

  it('should render with custom classname', () => {
    const { getByTestId } = render(
      <AvatarAccount
        className="mm-avatar-account--test"
        data-testid="classname"
        {...args}
      />,
    );
    expect(getByTestId('classname')).toHaveClass('mm-avatar-account--test');
  });

  it('should render with address', () => {
    const container = (
      <AvatarAccount
        className="mm-avatar-account--test"
        data-testid="classname"
        {...args}
        address="0x0"
      />
    );
    expect(container.props.address).toStrictEqual('0x0');
  });

  it('should render with different size classes', () => {
    const { getByTestId } = render(
      <>
        <AvatarAccount
          size={AvatarAccountSize.Xs}
          data-testid={AvatarAccountSize.Xs}
          {...args}
        />
        <AvatarAccount
          size={AvatarAccountSize.Sm}
          data-testid={AvatarAccountSize.Sm}
          {...args}
        />
        <AvatarAccount
          size={AvatarAccountSize.Md}
          data-testid={AvatarAccountSize.Md}
          {...args}
        />
        <AvatarAccount
          size={AvatarAccountSize.Lg}
          data-testid={AvatarAccountSize.Lg}
          {...args}
        />
        <AvatarAccount
          size={AvatarAccountSize.Xl}
          data-testid={AvatarAccountSize.Xl}
          {...args}
        />
      </>,
    );
    expect(getByTestId(AvatarAccountSize.Xs)).toHaveClass(
      `mm-avatar-base--size-${AvatarAccountSize.Xs}`,
    );
    expect(getByTestId(AvatarAccountSize.Sm)).toHaveClass(
      `mm-avatar-base--size-${AvatarAccountSize.Sm}`,
    );
    expect(getByTestId(AvatarAccountSize.Md)).toHaveClass(
      `mm-avatar-base--size-${AvatarAccountSize.Md}`,
    );
    expect(getByTestId(AvatarAccountSize.Lg)).toHaveClass(
      `mm-avatar-base--size-${AvatarAccountSize.Lg}`,
    );
    expect(getByTestId(AvatarAccountSize.Xl)).toHaveClass(
      `mm-avatar-base--size-${AvatarAccountSize.Xl}`,
    );
  });
});
