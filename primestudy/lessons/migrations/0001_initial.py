# Generated by Django 4.0 on 2023-06-23 20:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Grade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True, verbose_name='Slug')),
                ('grade_year', models.CharField(choices=[('7 класс', '7 класс'), ('8 класс', '8 класс'), ('9 класс', '9 класс'), ('10 класс', '10 класс'), ('11 класс', '11 класс'), ('12 класс', '12 класс')], max_length=8, verbose_name='Год обучения')),
            ],
            options={
                'verbose_name': 'Класс',
                'verbose_name_plural': 'Классы',
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True, verbose_name='Slug')),
                ('subject_type', models.CharField(choices=[('Математика', 'Математика'), ('Физика', 'Физика'), ('Информатика', 'Информатика')], max_length=20, verbose_name='Название предмета')),
            ],
            options={
                'verbose_name': 'Предмет',
                'verbose_name_plural': 'Предметы',
            },
        ),
        migrations.CreateModel(
            name='SubjectGrade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True, verbose_name='Slug')),
                ('name', models.CharField(max_length=100, verbose_name='Предмет для уч. года')),
                ('grade_year', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lessons.grade', verbose_name='Класс')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lessons.subject', verbose_name='Предмет')),
            ],
            options={
                'verbose_name': 'Предмет для уч. года',
                'verbose_name_plural': 'Предметы для уч. года',
            },
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True, verbose_name='Slug')),
                ('topic', models.CharField(max_length=100, verbose_name='Тема')),
                ('content', models.CharField(max_length=100, verbose_name='Контент')),
                ('subject_grade', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='topics', to='lessons.subjectgrade', verbose_name='Предмет и класс')),
            ],
            options={
                'verbose_name': 'Тема',
                'verbose_name_plural': 'Разделы',
            },
        ),
    ]
