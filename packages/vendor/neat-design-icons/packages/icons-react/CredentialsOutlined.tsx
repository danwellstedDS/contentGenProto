// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CredentialsOutlinedSVG from '../icons-svg/lib/CredentialsOutlined'
import Icon, { type BaseIconProps } from '../components'

const CredentialsOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CredentialsOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CredentialsOutlined.displayName = 'CredentialsOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CredentialsOutlined)