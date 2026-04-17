// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TagsFilledSVG from '../icons-svg/lib/TagsFilled'
import Icon, { type BaseIconProps } from '../components'

const TagsFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TagsFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TagsFilled.displayName = 'TagsFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TagsFilled)