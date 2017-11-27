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
  selector: '[au],[style]'
})
export class AuDirective {
  @HostBinding('style.left') left: string;
  @HostBinding('style.right') right: string;
  @HostBinding('style.width') width: string;
  @HostBinding('style.height') height: string;

  @HostBinding('style.color') color: string;
  @HostBinding('style.background-color') backgroundColor: string;

  @HostBinding('attr.au') auOut: string;

  public constructor(@Attribute('au') private auIn: string, @Attribute('style') private styleIn: string) {
    if (null !== auIn) {
      if (null !== styleIn) {
        styleIn = styleIn.concat(';', auIn);
      }
      else {
        styleIn = auIn;
      }
    }
    else if (null === styleIn) {
      return;
    }

    let auClasses: string = '';

    styleIn.replace(MATCH_ALL_WHITESPACE, EMPTY_STRING).split(STYLE_ATTRIBUTE_SEPARATOR).forEach((attribute: string) => {
      let attributeNameValuePair: string[] = attribute.split(STYLE_ATTRIBUTE_NAME_VALUE_SEPARATOR);
      let attributeName: string = attributeNameValuePair[0];
      let attributeValue: string = attributeNameValuePair[1];

      console.log(attributeName);
      console.log(attributeValue);

      // convert sizable ratio attribute values (represented by a pair of scalar values (numerator/denominator)) to percentages

      if (null !== attributeName.match(SIZABLE_ATTRIBUTE_MATCHER)) {
        let scalars: string[] = attributeValue.split(RATIO_SEPARATOR);

        if (null !== scalars) {
          this[attributeName] = Number(scalars[0]) * 100 / Number(scalars[1]) + '%';
        }
      }

      // write (or rewrite) named style attribute values for which this @Directive has a @HostBinding

      else if (undefined !== attributeValue && this.hasOwnProperty(attributeName)) {
        this[attributeName] = attributeValue;
      }

      // todo: handle cases where legitimate style attributes that aren't handled by this @Directive should be kept / rewritten to the style attribute

      // attributes that do not have a value are AU classes

      else if (undefined !== attributeValue) {
        auClasses = auClasses.concat(attributeName);
      }
    });

    if ('' !== auClasses) {
      this.auOut = auClasses;
    }
  }
}
