// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CertificationOutlinedSVG from '../icons-svg/lib/CertificationOutlined'
import Icon, { type BaseIconProps } from '../components'

const CertificationOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CertificationOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CertificationOutlined.displayName = 'CertificationOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CertificationOutlined)