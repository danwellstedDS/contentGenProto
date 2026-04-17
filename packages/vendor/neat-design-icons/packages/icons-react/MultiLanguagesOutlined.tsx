// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MultiLanguagesOutlinedSVG from '../icons-svg/lib/MultiLanguagesOutlined'
import Icon, { type BaseIconProps } from '../components'

const MultiLanguagesOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MultiLanguagesOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MultiLanguagesOutlined.displayName = 'MultiLanguagesOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MultiLanguagesOutlined)