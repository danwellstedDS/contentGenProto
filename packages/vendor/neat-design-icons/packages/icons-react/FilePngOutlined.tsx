// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FilePngOutlinedSVG from '../icons-svg/lib/FilePngOutlined'
import Icon, { type BaseIconProps } from '../components'

const FilePngOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FilePngOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FilePngOutlined.displayName = 'FilePngOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FilePngOutlined)