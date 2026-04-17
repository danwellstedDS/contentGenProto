// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PackageFilledSVG from '../icons-svg/lib/PackageFilled'
import Icon, { type BaseIconProps } from '../components'

const PackageFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PackageFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PackageFilled.displayName = 'PackageFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PackageFilled)