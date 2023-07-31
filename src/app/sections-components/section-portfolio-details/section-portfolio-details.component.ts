import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { IConfPortfolio, IPicture } from '../../core/interfaces/section.interface';
import { transition, trigger } from '@angular/animations';
import {
  hideElementWith300msDelay,
  showElementWith300msDelay,
  startByHideElement,
  startByRenderElement,
} from '../../core/utils/animations';
import { interval, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-section-portfolio-details',
  templateUrl: './section-portfolio-details.component.html',
  styleUrls: ['./section-portfolio-details.component.scss'],
  animations: [
    trigger('thumbState', [
      transition('void => *', [startByHideElement, showElementWith300msDelay]),
      transition('* => void', [startByRenderElement, hideElementWith300msDelay]),
    ]),
  ],
})
export class SectionPortfolioDetailsComponent implements OnDestroy {
  @Input('portfolio') portfolio!: IConfPortfolio;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  currentSlide: number = 0;
  interval$: Observable<number> = new Observable<number>();
  subscription: Subscription = new Subscription();

  constructor() {
    this.interval$ = interval(5000).pipe(tap(() => this.onAnimateSlide(this.currentSlide)));
    this.subscription = this.interval$.subscribe();
  }

  trackBySrc(index: number, item: IPicture): string {
    return item.src ?? 'no source found';
  }

  onPreviousClick(): void {
    const previousSlide: number = this.currentSlide - 1;
    const ifCurrentSlideIsLowerThanZero: boolean = previousSlide < 0;
    const showLastSlide: number = this.portfolio.picturesProject.length - 1;
    this.currentSlide = ifCurrentSlideIsLowerThanZero ? showLastSlide : previousSlide;
  }

  onNextClick(): void {
    this.moveToNextSlide(this.currentSlide + 1);
  }

  onAnimateSlide(currentSlide: number): void {
    this.moveToNextSlide(currentSlide + 1);
  }

  moveToNextSlide(nextSlide: number): void {
    const ifCurrentSlideIsIsLastSlide: boolean = nextSlide === this.portfolio.picturesProject.length;
    const firstSlide: number = 0;
    this.currentSlide = ifCurrentSlideIsIsLastSlide ? firstSlide : nextSlide;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
