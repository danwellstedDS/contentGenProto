// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SettingFilledSVG from '../icons-svg/lib/SettingFilled'
import Icon, { type BaseIconProps } from '../components'

const SettingFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SettingFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SettingFilled.displayName = 'SettingFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SettingFilled)