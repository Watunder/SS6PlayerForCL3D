// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { SsPartType } from '../../ss/ssfb/ss-part-type.js';


export class PartData {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PartData {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPartData(bb:flatbuffers.ByteBuffer, obj?:PartData):PartData {
  return (obj || new PartData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPartData(bb:flatbuffers.ByteBuffer, obj?:PartData):PartData {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PartData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

index():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

parentIndex():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

type():SsPartType {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : SsPartType.Nulltype;
}

boundsType():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

alphaBlendType():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

refname():string|null
refname(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
refname(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

effectfilename():string|null
effectfilename(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
effectfilename(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

colorLabel():string|null
colorLabel(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
colorLabel(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

maskInfluence():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

static startPartData(builder:flatbuffers.Builder) {
  builder.startObject(10);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addIndex(builder:flatbuffers.Builder, index:number) {
  builder.addFieldInt16(1, index, 0);
}

static addParentIndex(builder:flatbuffers.Builder, parentIndex:number) {
  builder.addFieldInt16(2, parentIndex, 0);
}

static addType(builder:flatbuffers.Builder, type:SsPartType) {
  builder.addFieldInt8(3, type, SsPartType.Nulltype);
}

static addBoundsType(builder:flatbuffers.Builder, boundsType:number) {
  builder.addFieldInt16(4, boundsType, 0);
}

static addAlphaBlendType(builder:flatbuffers.Builder, alphaBlendType:number) {
  builder.addFieldInt16(5, alphaBlendType, 0);
}

static addRefname(builder:flatbuffers.Builder, refnameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, refnameOffset, 0);
}

static addEffectfilename(builder:flatbuffers.Builder, effectfilenameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, effectfilenameOffset, 0);
}

static addColorLabel(builder:flatbuffers.Builder, colorLabelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, colorLabelOffset, 0);
}

static addMaskInfluence(builder:flatbuffers.Builder, maskInfluence:number) {
  builder.addFieldInt16(9, maskInfluence, 0);
}

static endPartData(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPartData(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset, index:number, parentIndex:number, type:SsPartType, boundsType:number, alphaBlendType:number, refnameOffset:flatbuffers.Offset, effectfilenameOffset:flatbuffers.Offset, colorLabelOffset:flatbuffers.Offset, maskInfluence:number):flatbuffers.Offset {
  PartData.startPartData(builder);
  PartData.addName(builder, nameOffset);
  PartData.addIndex(builder, index);
  PartData.addParentIndex(builder, parentIndex);
  PartData.addType(builder, type);
  PartData.addBoundsType(builder, boundsType);
  PartData.addAlphaBlendType(builder, alphaBlendType);
  PartData.addRefname(builder, refnameOffset);
  PartData.addEffectfilename(builder, effectfilenameOffset);
  PartData.addColorLabel(builder, colorLabelOffset);
  PartData.addMaskInfluence(builder, maskInfluence);
  return PartData.endPartData(builder);
}
}
