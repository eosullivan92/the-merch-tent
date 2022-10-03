/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('merchandise').del()
  await knex('merchandise').insert([
    {
      id: 1,
      type: 't-shirt',
      artist: 'Pist Idiots',
      size: 'M',
      color: 'yellow',
      genre: '',
      price: 45,
      quantity: 3,
    },
    {
      id: 2,
      type: 't-shirt',
      artist: 'Pist Idiots',
      size: 'L',
      color: 'yellow',
      genre: '',
      price: 45,
      quantity: 3,
    },
    {
      id: 3,
      type: 't-shirt',
      artist: 'Pist Idiots',
      size: 'XL',
      color: 'yellow',
      genre: '',
      price: 45,
      quantity: 3,
    },
    {
      id: 4,
      type: 't-shirt',
      artist: 'Parquet Courts',
      size: 'M',
      color: 'black',
      genre: '',
      price: 45,
      quantity: 3,
    },
    {
      id: 5,
      type: 't-shirt',
      artist: 'Parquet Courts',
      size: 'L',
      color: 'black',
      genre: '',
      price: 45,
      quantity: 3,
    },
    {
      id: 6,
      type: 't-shirt',
      artist: 'Parquet Courts',
      size: 'XL',
      color: 'black',
      genre: '',
      price: 45,
      quantity: 3,
    },
    {
      id: 7,
      type: 't-shirt',
      artist: 'Idles',
      size: 'M',
      color: 'black',
      genre: '',
      price: 45,
      quantity: 3,
    },
    {
      id: 8,
      type: 't-shirt',
      artist: 'Idles',
      size: 'L',
      color: 'black',
      genre: '',
      price: 45,
      quantity: 3,
    },
    {
      id: 9,
      type: 't-shirt',
      artist: 'Idles',
      size: 'XL',
      color: 'black',
      genre: '',
      price: 45,
      quantity: 3,
    },
  ])
}