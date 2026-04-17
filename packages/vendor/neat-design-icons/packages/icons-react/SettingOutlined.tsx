// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SettingOutlinedSVG from '../icons-svg/lib/SettingOutlined'
import Icon, { type BaseIconProps } from '../components'

const SettingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SettingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SettingOutlined.displayName = 'SettingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SettingOutlined)