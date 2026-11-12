import { Schema, model, type InferSchemaType } from 'mongoose';

const notinhaSchema = new Schema({
    titulo: { type: String, required: true, trim: true, minlength: 1 },
    conteudo: { type: String, required: true, trim: true, maxlength: 2000, default: '' },
    },
    {
    timestamps: {createdAt: 'criado_em', updatedAt: 'atualizado_em' },
    versionKey: false,
        toJSON: {
            transform: (_doc, ret: Record<string, unknown>) => {
                ret.id = String(ret._id);
                delete ret._id;
                return ret;
            }
        }
    }
);

export type Notinha = InferSchemaType<typeof notinhaSchema>;

export const NotinhaModel = model<Notinha>('Notinha', notinhaSchema);
