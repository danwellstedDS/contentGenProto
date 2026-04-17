// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CertificationFilledSVG from '../icons-svg/lib/CertificationFilled'
import Icon, { type BaseIconProps } from '../components'

const CertificationFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CertificationFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CertificationFilled.displayName = 'CertificationFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CertificationFilled)