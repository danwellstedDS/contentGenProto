// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FilesOutlinedSVG from '../icons-svg/lib/FilesOutlined'
import Icon, { type BaseIconProps } from '../components'

const FilesOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FilesOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FilesOutlined.displayName = 'FilesOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FilesOutlined)