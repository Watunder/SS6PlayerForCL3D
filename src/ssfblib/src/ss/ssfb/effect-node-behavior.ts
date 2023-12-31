// automatically generated by the FlatBuffers compiler, do not modify

import { EffectParticleElementAlphaFade } from '../../ss/ssfb/effect-particle-element-alpha-fade.js';
import { EffectParticleElementBasic } from '../../ss/ssfb/effect-particle-element-basic.js';
import { EffectParticleElementDelay } from '../../ss/ssfb/effect-particle-element-delay.js';
import { EffectParticleElementGravity } from '../../ss/ssfb/effect-particle-element-gravity.js';
import { EffectParticleElementInitColor } from '../../ss/ssfb/effect-particle-element-init-color.js';
import { EffectParticleElementPosition } from '../../ss/ssfb/effect-particle-element-position.js';
import { EffectParticleElementRndSeedChange } from '../../ss/ssfb/effect-particle-element-rnd-seed-change.js';
import { EffectParticleElementRotation } from '../../ss/ssfb/effect-particle-element-rotation.js';
import { EffectParticleElementRotationTrans } from '../../ss/ssfb/effect-particle-element-rotation-trans.js';
import { EffectParticleElementSize } from '../../ss/ssfb/effect-particle-element-size.js';
import { EffectParticleElementTangentialAcceleration } from '../../ss/ssfb/effect-particle-element-tangential-acceleration.js';
import { EffectParticleElementTransColor } from '../../ss/ssfb/effect-particle-element-trans-color.js';
import { EffectParticleElementTransSize } from '../../ss/ssfb/effect-particle-element-trans-size.js';
import { EffectParticleElementTransSpeed } from '../../ss/ssfb/effect-particle-element-trans-speed.js';
import { EffectParticleInfiniteEmitEnabled } from '../../ss/ssfb/effect-particle-infinite-emit-enabled.js';
import { EffectParticlePointGravity } from '../../ss/ssfb/effect-particle-point-gravity.js';
import { EffectParticleTurnToDirectionEnabled } from '../../ss/ssfb/effect-particle-turn-to-direction-enabled.js';


export enum EffectNodeBehavior {
  NONE = 0,
  EffectParticleElementBasic = 1,
  EffectParticleElementRndSeedChange = 2,
  EffectParticleElementDelay = 3,
  EffectParticleElementGravity = 4,
  EffectParticleElementPosition = 5,
  EffectParticleElementRotation = 6,
  EffectParticleElementRotationTrans = 7,
  EffectParticleElementTransSpeed = 8,
  EffectParticleElementTangentialAcceleration = 9,
  EffectParticleElementInitColor = 10,
  EffectParticleElementTransColor = 11,
  EffectParticleElementAlphaFade = 12,
  EffectParticleElementSize = 13,
  EffectParticleElementTransSize = 14,
  EffectParticlePointGravity = 15,
  EffectParticleTurnToDirectionEnabled = 16,
  EffectParticleInfiniteEmitEnabled = 17
}

export function unionToEffectNodeBehavior(
  type: EffectNodeBehavior,
  accessor: (obj:EffectParticleElementAlphaFade|EffectParticleElementBasic|EffectParticleElementDelay|EffectParticleElementGravity|EffectParticleElementInitColor|EffectParticleElementPosition|EffectParticleElementRndSeedChange|EffectParticleElementRotation|EffectParticleElementRotationTrans|EffectParticleElementSize|EffectParticleElementTangentialAcceleration|EffectParticleElementTransColor|EffectParticleElementTransSize|EffectParticleElementTransSpeed|EffectParticleInfiniteEmitEnabled|EffectParticlePointGravity|EffectParticleTurnToDirectionEnabled) => EffectParticleElementAlphaFade|EffectParticleElementBasic|EffectParticleElementDelay|EffectParticleElementGravity|EffectParticleElementInitColor|EffectParticleElementPosition|EffectParticleElementRndSeedChange|EffectParticleElementRotation|EffectParticleElementRotationTrans|EffectParticleElementSize|EffectParticleElementTangentialAcceleration|EffectParticleElementTransColor|EffectParticleElementTransSize|EffectParticleElementTransSpeed|EffectParticleInfiniteEmitEnabled|EffectParticlePointGravity|EffectParticleTurnToDirectionEnabled|null
): EffectParticleElementAlphaFade|EffectParticleElementBasic|EffectParticleElementDelay|EffectParticleElementGravity|EffectParticleElementInitColor|EffectParticleElementPosition|EffectParticleElementRndSeedChange|EffectParticleElementRotation|EffectParticleElementRotationTrans|EffectParticleElementSize|EffectParticleElementTangentialAcceleration|EffectParticleElementTransColor|EffectParticleElementTransSize|EffectParticleElementTransSpeed|EffectParticleInfiniteEmitEnabled|EffectParticlePointGravity|EffectParticleTurnToDirectionEnabled|null {
  switch(EffectNodeBehavior[type]) {
    case 'NONE': return null; 
    case 'EffectParticleElementBasic': return accessor(new EffectParticleElementBasic())! as EffectParticleElementBasic;
    case 'EffectParticleElementRndSeedChange': return accessor(new EffectParticleElementRndSeedChange())! as EffectParticleElementRndSeedChange;
    case 'EffectParticleElementDelay': return accessor(new EffectParticleElementDelay())! as EffectParticleElementDelay;
    case 'EffectParticleElementGravity': return accessor(new EffectParticleElementGravity())! as EffectParticleElementGravity;
    case 'EffectParticleElementPosition': return accessor(new EffectParticleElementPosition())! as EffectParticleElementPosition;
    case 'EffectParticleElementRotation': return accessor(new EffectParticleElementRotation())! as EffectParticleElementRotation;
    case 'EffectParticleElementRotationTrans': return accessor(new EffectParticleElementRotationTrans())! as EffectParticleElementRotationTrans;
    case 'EffectParticleElementTransSpeed': return accessor(new EffectParticleElementTransSpeed())! as EffectParticleElementTransSpeed;
    case 'EffectParticleElementTangentialAcceleration': return accessor(new EffectParticleElementTangentialAcceleration())! as EffectParticleElementTangentialAcceleration;
    case 'EffectParticleElementInitColor': return accessor(new EffectParticleElementInitColor())! as EffectParticleElementInitColor;
    case 'EffectParticleElementTransColor': return accessor(new EffectParticleElementTransColor())! as EffectParticleElementTransColor;
    case 'EffectParticleElementAlphaFade': return accessor(new EffectParticleElementAlphaFade())! as EffectParticleElementAlphaFade;
    case 'EffectParticleElementSize': return accessor(new EffectParticleElementSize())! as EffectParticleElementSize;
    case 'EffectParticleElementTransSize': return accessor(new EffectParticleElementTransSize())! as EffectParticleElementTransSize;
    case 'EffectParticlePointGravity': return accessor(new EffectParticlePointGravity())! as EffectParticlePointGravity;
    case 'EffectParticleTurnToDirectionEnabled': return accessor(new EffectParticleTurnToDirectionEnabled())! as EffectParticleTurnToDirectionEnabled;
    case 'EffectParticleInfiniteEmitEnabled': return accessor(new EffectParticleInfiniteEmitEnabled())! as EffectParticleInfiniteEmitEnabled;
    default: return null;
  }
}

export function unionListToEffectNodeBehavior(
  type: EffectNodeBehavior, 
  accessor: (index: number, obj:EffectParticleElementAlphaFade|EffectParticleElementBasic|EffectParticleElementDelay|EffectParticleElementGravity|EffectParticleElementInitColor|EffectParticleElementPosition|EffectParticleElementRndSeedChange|EffectParticleElementRotation|EffectParticleElementRotationTrans|EffectParticleElementSize|EffectParticleElementTangentialAcceleration|EffectParticleElementTransColor|EffectParticleElementTransSize|EffectParticleElementTransSpeed|EffectParticleInfiniteEmitEnabled|EffectParticlePointGravity|EffectParticleTurnToDirectionEnabled) => EffectParticleElementAlphaFade|EffectParticleElementBasic|EffectParticleElementDelay|EffectParticleElementGravity|EffectParticleElementInitColor|EffectParticleElementPosition|EffectParticleElementRndSeedChange|EffectParticleElementRotation|EffectParticleElementRotationTrans|EffectParticleElementSize|EffectParticleElementTangentialAcceleration|EffectParticleElementTransColor|EffectParticleElementTransSize|EffectParticleElementTransSpeed|EffectParticleInfiniteEmitEnabled|EffectParticlePointGravity|EffectParticleTurnToDirectionEnabled|null, 
  index: number
): EffectParticleElementAlphaFade|EffectParticleElementBasic|EffectParticleElementDelay|EffectParticleElementGravity|EffectParticleElementInitColor|EffectParticleElementPosition|EffectParticleElementRndSeedChange|EffectParticleElementRotation|EffectParticleElementRotationTrans|EffectParticleElementSize|EffectParticleElementTangentialAcceleration|EffectParticleElementTransColor|EffectParticleElementTransSize|EffectParticleElementTransSpeed|EffectParticleInfiniteEmitEnabled|EffectParticlePointGravity|EffectParticleTurnToDirectionEnabled|null {
  switch(EffectNodeBehavior[type]) {
    case 'NONE': return null; 
    case 'EffectParticleElementBasic': return accessor(index, new EffectParticleElementBasic())! as EffectParticleElementBasic;
    case 'EffectParticleElementRndSeedChange': return accessor(index, new EffectParticleElementRndSeedChange())! as EffectParticleElementRndSeedChange;
    case 'EffectParticleElementDelay': return accessor(index, new EffectParticleElementDelay())! as EffectParticleElementDelay;
    case 'EffectParticleElementGravity': return accessor(index, new EffectParticleElementGravity())! as EffectParticleElementGravity;
    case 'EffectParticleElementPosition': return accessor(index, new EffectParticleElementPosition())! as EffectParticleElementPosition;
    case 'EffectParticleElementRotation': return accessor(index, new EffectParticleElementRotation())! as EffectParticleElementRotation;
    case 'EffectParticleElementRotationTrans': return accessor(index, new EffectParticleElementRotationTrans())! as EffectParticleElementRotationTrans;
    case 'EffectParticleElementTransSpeed': return accessor(index, new EffectParticleElementTransSpeed())! as EffectParticleElementTransSpeed;
    case 'EffectParticleElementTangentialAcceleration': return accessor(index, new EffectParticleElementTangentialAcceleration())! as EffectParticleElementTangentialAcceleration;
    case 'EffectParticleElementInitColor': return accessor(index, new EffectParticleElementInitColor())! as EffectParticleElementInitColor;
    case 'EffectParticleElementTransColor': return accessor(index, new EffectParticleElementTransColor())! as EffectParticleElementTransColor;
    case 'EffectParticleElementAlphaFade': return accessor(index, new EffectParticleElementAlphaFade())! as EffectParticleElementAlphaFade;
    case 'EffectParticleElementSize': return accessor(index, new EffectParticleElementSize())! as EffectParticleElementSize;
    case 'EffectParticleElementTransSize': return accessor(index, new EffectParticleElementTransSize())! as EffectParticleElementTransSize;
    case 'EffectParticlePointGravity': return accessor(index, new EffectParticlePointGravity())! as EffectParticlePointGravity;
    case 'EffectParticleTurnToDirectionEnabled': return accessor(index, new EffectParticleTurnToDirectionEnabled())! as EffectParticleTurnToDirectionEnabled;
    case 'EffectParticleInfiniteEmitEnabled': return accessor(index, new EffectParticleInfiniteEmitEnabled())! as EffectParticleInfiniteEmitEnabled;
    default: return null;
  }
}
