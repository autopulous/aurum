import {Directive, Attribute, HostBinding} from '@angular/core';

// acceptable forms are
//
// right-auto
// left-50%
// height-20px
// width-2.5rem
// right-3em
// left-11-25

const STYLE_ATTRIBUTE_SEPARATOR = ';';
const STYLE_ATTRIBUTE_NAME_VALUE_SEPARATOR = ':';
const RATIO_SEPARATOR = '/';

const MATCH_ALL_WHITESPACE = /\s/g;
const EMPTY_STRING = '';

const SIZABLE_ATTRIBUTE_MATCHER = /^(right|left|width|height)$/g;

const AU_ATTRIBUTE_SEPARATOR = ' ';
// const SIZABLE_ATTRIBUTE_MATCHER = /^(?:right|left|width|height)-(?:[a-z]+|\d+(?:-\d+|%|px|rem|em))$/g;
const SCALAR_SIZE_MATCHER = /\d+/g;
const TEXTUAL_SIZE_MATCHER = /-[a-z]+$/g;

@Directive({
  selector: '[style]'
})
export class AuDirective {
  @HostBinding('style.left') left: string;
  @HostBinding('style.right') right: string;
  @HostBinding('style.width') width: string;
  @HostBinding('style.height') height: string;

  @HostBinding('style.color') color: string;
  @HostBinding('style.background-color') backgroundColor: string;

  public constructor(@Attribute('style') private style: string) {
    style.replace(MATCH_ALL_WHITESPACE, EMPTY_STRING).split(STYLE_ATTRIBUTE_SEPARATOR).forEach((attribute: string) => {
      let attributeNameValuePair: string[] = attribute.split(STYLE_ATTRIBUTE_NAME_VALUE_SEPARATOR);
      let attributeName: string = attributeNameValuePair[0];
      let attributeValue: string = attributeNameValuePair[1];

      console.log(attributeName);
      console.log(attributeValue);

      if (null !== attributeName.match(SIZABLE_ATTRIBUTE_MATCHER)) {
        let scalars: string[] = attributeValue.split(RATIO_SEPARATOR);

        if (null !== scalars) {
          this[attributeName] = Number(scalars[0]) * 100 / Number(scalars[1]) + '%';
        }
      }
      else {
        this[attributeName] = attributeValue;
      }
    });
  }
}
