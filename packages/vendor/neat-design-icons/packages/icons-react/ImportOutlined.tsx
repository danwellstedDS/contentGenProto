// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ImportOutlinedSVG from '../icons-svg/lib/ImportOutlined'
import Icon, { type BaseIconProps } from '../components'

const ImportOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ImportOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ImportOutlined.displayName = 'ImportOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ImportOutlined)