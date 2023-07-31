import { animate, AnimationAnimateMetadata, AnimationStyleMetadata, style } from '@angular/animations';

export const startByHideElement: AnimationStyleMetadata = style({ opacity: 0 });
export const startByRenderElement: AnimationStyleMetadata = style({ opacity: 1 });
export const hideElementWith300msDelay: AnimationAnimateMetadata = animate('300ms', style({ opacity: 0 }));
export const hideElementWith500msDelay: AnimationAnimateMetadata = animate('300ms', style({ opacity: 0 }));
export const showElementWith300msDelay: AnimationAnimateMetadata = animate('300ms', style({ opacity: 1 }));
export const showElementWith500msDelay: AnimationAnimateMetadata = animate('500ms', style({ opacity: 1 }));
